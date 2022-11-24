import Person from "../models/Person";

export const renderPerson = async (req, res) => {
  const person = await Person.find().lean();

  res.render("indexPerson", { person: person });
};

export const createPerson = async (req, res) => {
  try {
    const person = Person(req.body);

    await person.save();

    res.redirect("/person");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id).lean();

    res.render("editPerson", { person: person });
  } catch (error) {
    console.log(error.messsage);
  }
};

export const deletePerson = async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);

  res.redirect("/person");
};

export const editPerson = async (req, res) => {
  await Person.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/person");
};
