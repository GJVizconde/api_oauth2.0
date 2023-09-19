const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      email: elem.email,
      phone: elem.phone,
      created: false,
    };
  });

  return clean;
};

export default cleanArray;
