import { Request, Response } from "express";

import GradeService from "../../services/eschool/grade";
import SchoolService from "../../services/eschool/school";
import Grade from "../../models/eschool/grade";

export const get_all_grades = async (
    request: Request,
    response: Response,
) => {
    const data = await GradeService.getAll();
    return response.status(200).json(data);
};

export const get_grade = async (request: Request, response: Response) => {
    const { id } = request.params;

    const data = await GradeService.getById(id);

    if (data) {
        return response.status(200).json(data);
    }
    return response.status(404).json(
        { msg: "no school with that phoneNumber" },
    );
};

export const create_grade = async (request: Request, response: Response) => {
    const {
        code,
        description,
        limit,
        active,
        classes,
        schoolId
    } = await request.body;

    try {

        let data: Grade = {
            id: 0,
            code,
            description,
            limit,
            active,
            classes,
        };

        if (!!schoolId) {
            data.school = await SchoolService.getById(schoolId)
        }

        data = await GradeService.create(data);

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
