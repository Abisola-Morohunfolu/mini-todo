import Button from "../button/button";

const EditTask = () => {
  return (
    <div className="h-screen bg-[var(--bg-slate)] flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-btn-blue text-white p-4 min-h-[123px]">
        <h2 className="text-2xl font-semibold text-center">Edit Task</h2>
      </div>

      {/* Content */}
      <div className="bg-white p-6 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <label
            htmlFor="taskName"
            className="block text-gray-900 text-base tracking-wide"
          >
            Task Name
          </label>
          <input
            id="taskName"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* Button Container */}
        <div className="flex gap-4 mt-auto pt-6">
          <Button
            label="Delete"
            variant="square"
            color="danger"
            additonalClass="flex-shrink-0"
          />
          <Button
            label="Save"
            variant="square"
            color="primary"
            additonalClass="flex-grow"
          />
        </div>
      </div>
    </div>
  );
};

export default EditTask;
