import { ChangeEvent, FormEvent, useState } from "react";

const LogUploadForm = () => {
  const [file, setFile] = useState<File>();

  const endpoint = "http://localhost:5134/Upload/bin";

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) setFile(e.target.files[0]);
  };

  const submitFile = async () => {
    const formData = new FormData();
    formData.append("file", file as Blob);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    console.log(res.status);
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          submitFile();
        }}
      >
        <label htmlFor="file-upload">
          <input
            type="file"
            name="file-upload"
            id="file-upload"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
          />
        </label>
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default LogUploadForm;
