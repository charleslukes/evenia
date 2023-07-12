import { formInputTypes } from "@lib/shared/types";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const useEventForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<formInputTypes>();


  const locationOptions = [
    { value: "paris", label: "Paris" },
    { value: "new york", label: "New york" },
    { value: "instanbul", label: "Instanbul" },
    { value: "london", label: "London" },
    { value: "madrid", label: "Madrid" },
    { value: "tokyo", label: "Tokyo" },
    { value: "dubia", label: "Dubia" },
    { value: "bilda", label: "Bilda" },
    { value: "wakanda", label: "Wakanda" },
    { value: "gotham", label: "Gotham" },
  ];

  const categoryOption = [
    { value: "conventional", label: "Conventional" },
    { value: "festival", label: "Festival" },
    { value: "trade", label: "Trade" },
    { value: "exhibition", label: "Exhibition" },
    { value: "music", label: "Music" },
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // NB: IMAGE SHOULD BE STORED IN A CLOUD SERVER BUT THIS IS JUST FOR FAST RESULT
        const binaryStr = reader.result;
        setValue("image", binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  return {
    register,
    handleSubmit,
    onDrop,
    control,
    locationOptions,
    categoryOption,
  };
};

export default useEventForm;
