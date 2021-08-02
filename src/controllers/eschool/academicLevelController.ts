import { Request, Response } from "express";

import AcademicLevelService from "../../services/eschool/academicLevel";
import SchoolService from "../../services/eschool/school";
import AcademicLevel from "../../models/eschool/academicLevel";

export const get_all_academicLevels = async (
    request: Request,
    response: Response,
) => {
    const data = await AcademicLevelService.getAll();
    return response.status(200).json(data);
};

export const get_academicLevel = async (request: Request, response: Response) => {
    const { id } = request.params;

    const data = await AcademicLevelService.getById(id);

    if (data) {
        return response.status(200).json(data);
    }
    return response.status(404).json(
        { msg: "no school with that phoneNumber" },
    );
};

export const create_academicLevel = async (request: Request, response: Response) => {
    const {
        code,
        description,
        codePersonalBoard,
        status,
        type,
        schoolId
    } = await request.body;

    try {

        let data: AcademicLevel = {
            id: 0,
            code,
            description,
            codePersonalBoard,
            status,
            type,
        };

        if (!!schoolId) {
            data.school = await SchoolService.getById(schoolId)
        }

        data = await AcademicLevelService.create(data);

        return response.status(200).json(data);
    } catch (e) {
        return response.status(404).json(
            { msg: "error to create a school with that i", error: e },
        );
    }
};

export const delete_acedemic = async (request: Request, response: Response) => {
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
