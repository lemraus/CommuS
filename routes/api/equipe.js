import { Router } from "express";
import { auth } from "../../config/passport";
import Membre from "../../models/Membre";

const router = new Router();

router
    // get all members for a given year
    .get("/:year", (req, res) => {
        const { year } = req.params;

        Membre.find({ year }, function (err, membres) {
            if (err) return res.status(400).send({ err });

            return res.send(membres);
        });
    })
    // post a new member
    .post("/", auth, (req, res) => {
        const { year, section, name, poste, photoPath } = req.body;
        if (!name || !photoPath) return res.status(400).send({
            err: `Required fields missing: ${!name && "Nom"}${(!name && !photoPath) && ", "}${!photoPath && "photoPath"}`
        });

        const newMembre = new Membre({
            year,
            section,
            name,
            poste,
            photoPath
        })
            .save((err, membre) => {
                if (err) return res.status(400).send({ err });

                return res.status(201).send(membre);
            });
    })
    // delete a member
    .delete("/:id", auth, (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).send({ err: "Required field missing: id" });

        Membre.findOneAndDelete({ _id: id }, function (err, deletedMembre) {
            if (err) return res.status(400).send({ err });

            return res.status(202).send(deletedMembre);
        });
    })
    // modify a member
    .put("/:id", auth, (req, res) => {
        const { id } = req.params;
        const { name, poste, photoPath } = req.body;
        if (!id) return res.status(400).send({ err: "Required field missing: id" });

        Membre.findOneAndUpdate(
            { _id: id },
            { name, poste, photoPath },
            { new: true },
            function (err, modifiedMember) {
                if (err) return res.status(400).send({ err });

                return res.status(202).send(modifiedMember);
            }
        );
    })

export default router;