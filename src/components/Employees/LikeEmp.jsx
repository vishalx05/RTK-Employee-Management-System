import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../../store/features/employee/employee.thunk";

const LikeEmp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const employees = useSelector((s) => s.employee.employees) || [];

  const filterLike = employees.filter((emp) => emp.highlight === true);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold mb-6">
          ❤️ Liked Employees
        </h1>

        {filterLike.length === 0 ? (
          <div className="text-center opacity-60 mt-10">
            No liked employees yet
          </div>
        ) : (
          <div className="grid gap-4">

            {filterLike.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 shadow-md hover:shadow-xl transition"
              >
                <div className="card-body">

                  <div className="flex items-center gap-4">

                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={item.profileUrl} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="font-bold">{item.name}</h2>
                      <p className="text-sm opacity-60">{item.email}</p>
                      <p className="text-sm">{item.bio}</p>
                    </div>

                    <div className="badge badge-error">
                      ❤️ Liked
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default LikeEmp;