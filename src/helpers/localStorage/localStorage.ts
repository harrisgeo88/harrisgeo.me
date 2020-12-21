export const setItem = (key = "", value: string) => {
  typeof window !== "undefined" && window.localStorage.setItem(key, value);
};

export const getItem = (item = "") => {
  let value = null;
  if (item && item !== "") {
    value = typeof window !== "undefined" && window.localStorage.getItem(item);
  }

  return value;
};

export const getDarkValue = () => {
  return getItem("dark") === "false" ? false : true;
};

export const setDarkValue = (value: boolean = false) => {
  setItem("dark", value ? "true" : "false");
};
