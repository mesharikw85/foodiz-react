import instance from ".";

const getAllCategories = async () => {
  const res = await instance.get("/category");
  console.log("res");
  return res.data;
};
const addCategory = async (catInfo) => {
  const formData = new FormData();

  for (const key in catInfo) {
    formData.append(key, catInfo[key]);
  }

  const res = await instance.post("/category", formData);
  return res.data;
};

export { getAllCategories, addCategory };
