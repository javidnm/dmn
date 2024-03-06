import { baseUrl } from "@/client";
import { useSession } from "@/hooks/use-user";
import React, { useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";

interface FileWithPreview extends File {
  preview: string;
}

const thumbsContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: React.CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: React.CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: React.CSSProperties = {
  display: "block",
  width: "auto",
  height: "100%",
};

interface PreviewsProps {
  onFile: (file: any) => void;
  filesUrl:[];
  setUplaodLoading:(value)=>void;
}

function Previews({ onFile,filesUrl = [] ,setUplaodLoading}: PreviewsProps): JSX.Element {
  const [files, setFiles] = useState<string[]>(filesUrl);
  const {sessionId} = useSession()
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*" as any,
    onDrop: (acceptedFiles: File[]) => {
      setUplaodLoading(true)
      const validFiles = acceptedFiles.map((file) =>URL.createObjectURL(file));
      var formData = new FormData();
      for (let i = 0; i < acceptedFiles.length; i++) {
        formData.append(`files`, acceptedFiles[i]);
      }
      fetch(baseUrl+"/api/media/upload", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sessionId}`
        },
        body: formData,
        redirect: 'follow'
      })
        .then(response => response.text())
        .then(result => {
          setUplaodLoading(false)
          onFile(JSON.parse(result)?.urls)
        })
        .catch(error => console.log('error', error));
      setFiles(validFiles);
      
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file}>
      <div style={thumbInner}>
        <img
          src={file}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file);
          }}
          alt={file}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file));
  }, [files]);

  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })} className="bg-slate-100 py-5 flex items-center justify-center border rounded-md p-2 border-dashed">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default Previews;
