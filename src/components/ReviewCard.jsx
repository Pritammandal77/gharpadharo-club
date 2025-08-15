import React from 'react';

function ReviewCard({name, position , avatarName, msg}) {
    return (
        <>
            <div
                className="max-w-sm border h-55 lg:h-61 xl:h-50 w-[100%] border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4"
            >
                <div className="flex items-center space-x-4">
                    <div
                        className="h-12 w-12 flex items-center justify-center bg-purple-500 text-white text-lg font-semibold rounded-full"
                    >
                        {avatarName}
                    </div>
                    <div>
                        <div className="text-gray-900 font-medium">{name}</div>
                        <div className="text-gray-600 text-sm">{position}</div>
                    </div>
                </div>

                <div className="flex text-[#525599] text-xl">★★★★★</div>

                <p className="text-gray-700">
                  {msg}
                </p>

            </div>

        </>
    );
}

export default ReviewCard;
