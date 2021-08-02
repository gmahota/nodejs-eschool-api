import { Request, Response } from "express";

import ClassService from "../../services/eschool/class";
import SchoolService from "../../services/eschool/school";
import GradeService from "../../services/eschool/grade";
import Class from "../../models/eschool/class";

export const get_all_classes = async (
    request: Request,
    response: Response,
) => {
    const data = await ClassService.getAll();
    return response.status(200).json(data);
};

export const get_class = async (request: Request, response: Response) => {
    const { id } = request.params;

    const data = await ClassService.getById(id);

    if (data) {
        return response.status(200).json(data);
    }
    return response.status(404).json(
        { msg: "no school with that phoneNumber" },
    );
};

export const create_class = async (request: Request, response: Response) => {
    const {
        code,
        year,
        description,
        limit,
        active,
        gradeId,
        schoolId
    } = await request.body;

    try {

        let data: Class = {
            id: 0,
            code,
            year,
            description,
            limit,
            active
        };

        if (!!schoolId) {
            data.school = await SchoolService.getById(schoolId)
        }

        if (!!gradeId) {
            data.grade = await GradeService.getById(gradeId)
        }

        data = await ClassService.create(data);

        return response.status(200).json(data);
    } catch (e) {
        return response.status(404).json(
            { msg: "error to create a school with that i", error: e },
        );
    }
};

export const delete_school = async (request: Request, response: Response) => {
    return response.status(500).json(
        { msg: "not Implemented" },
    );
    const { id } = request.body;

    try {
        //await schoolervice.remove(id);

        return response.send(200).json({ id: id });
    } catch (e) {
        return response.send(404).json(
            { msg: "error to create a order with that i" },
        );
    }
};
