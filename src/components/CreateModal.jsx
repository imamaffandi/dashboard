const CreateModal = ({ showModal, setShowModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowModal(false);
    }
  };
  return (
    showModal && (
      <div>
        <main
          className="backdrop w-full z-50 h-full fixed bg-dark bg-opacity-60"
          onClick={handleBackdropClick}
        >
          <div className="absolute top-10 left-28">
            <section className="relative rounded-lg  bg-dark shadow-lg w-[70rem] h-[30rem]">
              <button
                onClick={() => setShowModal(false)}
                className="z-10 absolute right-2 top-2 bg-red-500 text-white montserrat rounded-md py-2 px-3 font-semibold tracking-wide"
              >
                Close
              </button>

              <form className="form p-2">
                <div className="flex gap-2 py-3">
                  <label>
                    <input
                      required
                      placeholder="Title"
                      type="text"
                      className="input"
                    />
                  </label>

                  <label>
                    <input
                      required
                      placeholder="Client"
                      type="text"
                      className="input"
                    />
                  </label>
                  <label>
                    <input
                      required
                      placeholder="Project Manager"
                      type="text"
                      className="input"
                    />
                  </label>
                  <label>
                    <input
                      required
                      placeholder="Deadline"
                      type="text"
                      className="input"
                    />
                  </label>
                </div>
                <div className=" flex flex-col gap-2">
                  <label>
                    <input
                      required
                      placeholder="Crew"
                      type="text"
                      className="input"
                    />
                  </label>
                  <label>
                    <input placeholder="BA" type="text" className="input" />
                  </label>
                  <label>
                    <input
                      required
                      placeholder="Status"
                      type="text"
                      className="input"
                    />
                  </label>
                  <label>
                    <input
                      placeholder="Final File"
                      type="text"
                      className="input"
                    />
                  </label>
                  <label>
                    <input placeholder="Note" type="text" className="input" />
                  </label>
                </div>
                <button className="mt-5 bg-green-500 text-white montserrat rounded-md py-2 px-3 font-semibold tracking-wide">
                  Submit
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    )
  );
};

export default CreateModal;
