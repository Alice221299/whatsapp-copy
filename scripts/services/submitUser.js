const submitUser = async ({ form, url }) => {
  const dataForm = getDataForm(form);
  console.log(dataForm);

  if (dataForm.error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  } else {
    if (condition) {
    } else {
    }
  }
};

export submitUser;

const getDataForm = (form, informacionUObjetoaeditar) => {
  const dataForm = {};
  const childrenForm = Array.form(form.children);
  const dataFormInputs = childrenForm.filter(
    (item) => item.localName === "input" || item.localName === "select"
  );
  const labelsForm = childrenForm.filter((item) => item.localName === "label");

  if (informacionUObjeto) {
    dataFormInputs.forEach((element) => {
      element.value = informacionUObjetoaeditar[element.id];
    });
  }
  dataFormInputs.forEach((item) => {
    dataForm[item.id] = item.value;
  });

  const emptyField = validationForm(dataForm, labelsForm);
  if (emptyField) {
    return {
      dataForm: {},
      error: true,
      message: `El formulario presenta los siguientes campos vacíos: ${emptyField}`,
    };
  } else {
    return {
      dataForm: dataForm,
      error: false,
      message: null,
      informacionUObjetoaeditar: informacionUObjetoaeditar ? informacionUObjetoaeditar.id : false,
    };
  }
};

const validationForm = (data, labelList) => {
  let emptyField = "";
  for (const key in data) {
    if (!data[key]) {
      const label = labelList.find((item) => item.getAttribute("for") === key);

      emptyField += ` ${label.innerText}`;
    }
  }
  return emptyField;
};
