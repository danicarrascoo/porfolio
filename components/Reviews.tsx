import React from "react";

const Reviews = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="text-center">
                <p className="heading__mini">Cliente Reviews</p>
                <h1 className="heading__primary">
                    I've <span className="text-yellow-300">40+</span> Clients Feedback
                </h1>
            </div>
            <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Aquí puedes agregar tus comentarios o testimonios */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-gray-800">"Excelente servicio. ¡Muy recomendado!"</p>
                        <p className="text-gray-600 mt-2">- Juan Pérez</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-gray-800">"Me encantó el trabajo que hicieron. ¡Volveré pronto!"</p>
                        <p className="text-gray-600 mt-2">- María Rodríguez</p>
                    </div>
                    {/* Agrega más comentarios según sea necesario */}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
