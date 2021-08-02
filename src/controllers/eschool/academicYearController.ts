import { Request, Response } from "express";

import AcademicYearService from "../../services/eschool/academicYear";
import SchoolService from "../../services/eschool/school";
import AcademicYear from "../../models/eschool/academicYear";

export const get_all_academicYears = async (
    request: Request,
    response: Response,
) => {
    const data = await AcademicYearService.getAll();
    return response.status(200).json(data);
};

export const get_academicYear = async (request: Request, response: Response) => {
    const { id } = request.params;

    const data = await AcademicYearService.getById(id);

    if (data) {
        return response.status(200).json(data);
    }
    return response.status(404).json(
        { msg: "no school with that phoneNumber" },
    );
};

export const create_academicYear = async (request: Request, response: Response) => {
    const {
        code,
        begin,
        end,
        status,
        type,
        schoolId
    } = await request.body;

    try {

        let data: AcademicYear = {
            id: 0,
            code,
            begin,
            end,
            status,
            type
        };

        if (!!schoolId) {
            data.school = await SchoolService.getById(schoolId)
        }

        data = await AcademicYearService.create(data);

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
