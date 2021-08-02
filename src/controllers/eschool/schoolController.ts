import { Request, Response } from "express";
import SchoolService from "../../services/eschool/school";
import School from "../../models/eschool/school";

export const get_all_schools = async (
    request: Request,
    response: Response,
) => {
    const school = await SchoolService.getAll();
    return response.status(200).json(school);
};

export const get_school = async (request: Request, response: Response) => {
    const { id } = request.params;

    const school = await SchoolService.getById(id);

    if (school) {
        return response.status(200).json(school);
    }
    return response.status(404).json(
        { msg: "no school with that phoneNumber" },
    );
};

export const create_school = async (request: Request, response: Response) => {
    const {
        schoolNumber,
        vat,
        phoneNumber,
        cellphone,
        socialSecurity,
        address,
        email,
        status,
        active,
        createdAt,
        updatedAt,
        json,
    } = await request.body;

    try {
        let school: School = {
            id: 0,
            schoolNumber,
            vat,
            socialSecurity,
            phoneNumber,
            cellphone,
            address,
            email,
            status,
            active,
            createdAt,
            updatedAt,
            json,
        };

        school = await SchoolService.create(school);

        return response.status(200).json(school);
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
