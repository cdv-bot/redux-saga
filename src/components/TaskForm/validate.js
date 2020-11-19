const validate = value => {
  const error = {};
  const { title, description } = value;
  if (!title) {
    error.title = "Mời nhập tiêu đề !!! ";
  }
  if (!description) {
    error.description = "Mời nhập mô tả !!! ";
  }

  return error;
};

export default validate;
