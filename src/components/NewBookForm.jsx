import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGlobalContext } from "./GlobalContext";
import { useEffect } from "react";

const NewBookForm = () => {
  const { selected, setSelected, bookList, setBookList } = useGlobalContext();

  const schema = yup.object().shape({
    bookTitle: yup.string().trim().required("Book title is required"),
    author: yup.string().trim().required("Author name is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newBookId = bookList.length + 1;
    const newBook = {
      id: newBookId,
      bookTitle: data.bookTitle.trim(),
      author: data.author.trim(),
      status: "Available",
    };
    const newBookList = [...bookList, newBook];

    setBookList(newBookList);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ bookTitle: "", author: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <h3>New Book Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Book title..."
            className={errors.bookTitle ? "InputError" : ""}
            {...register("bookTitle")}
          />
          <p className="errorMessage">{errors.bookTitle?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Author..." {...register("author")} />
          <p className="errorMessage">{errors.author?.message}</p>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NewBookForm;
