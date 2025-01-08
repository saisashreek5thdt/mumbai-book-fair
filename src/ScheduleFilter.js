import React, { useState } from 'react';

const ScheduleSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedTitleFilter, setSelectedTitleFilter] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleTitleFilterChange = (event) => {
    setSelectedTitleFilter(event.target.value);
  };

  // Sample schedule data
  const scheduleData = [
    {
      time: '11:00 AM',
      title: 'Lorem Ipsum',
      description: '',
    },
    {
      time: '12:30 PM',
      title: 'Lorem Ipsum',
      description: '',
    },
    {
      time: '02:00 PM',
      title: 'Lorem Ipsum & Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      time: '04:00 PM',
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      time: '06:30 PM',
      title: 'Lorem Ipsum',
      description: '',
    },
    {
      time: '08:00 PM',
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      time: '10:00 PM',
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
  ];

  const filteredSchedule = scheduleData.filter(item => {
    const timeFilter = selectedFilter === 'All' || 
                      (selectedFilter === 'Morning' && item.time.includes('AM')) || 
                      (selectedFilter === 'Afternoon' && item.time.includes('PM') && parseInt(item.time) < 6) || 
                      (selectedFilter === 'Evening' && item.time.includes('PM') && parseInt(item.time) >= 6);

    const titleFilter = selectedTitleFilter === 'All' || item.title.includes(selectedTitleFilter);

    return timeFilter && titleFilter;
  });

  return (
    <section
      id="schedule"
      className="schedule-section schedule-1 schedule-style-3 pt-50 pt-lg-100 pt-xxl-120 position-relative"
    >
      <div className="container">
        <div className="row gx-70 gy-40">
          <div className="col-lg-4">
            <div className="sticky-contents">
              <div className="schedule-left-content">
                <div className="section-title mb-30 mb-lg-40 mb-xxl-60">
                  <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                    <span className="straight-line" />
                    Schedule
                  </span>
                  <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                    <span className="mb-n2 text-opacity">Lorem </span>
                    <span className="sub-title fw-extra-bold text-primary">
                      Ipsum
                    </span>
                  </h2>
                </div>
                <p className="custom-jakarta custom-font-style-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
                <div className="pt-4 pt-lg-30">
                  <a
                    href="#"
                    className="download-link d-flex align-items-center gap-40"
                    aria-label="buttons"
                  >
                    Download Agenda{" "}
                    <span className="ticket-arrow arrow-down-right">
                      <svg width={36} height={36}>
                        <use xlinkHref="#arrow-down-right" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="schedule-right-content position-relative">
              <div className="ellipse-image-3">
                <img
                  src="assets/images/ellipse-3.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="filter-dropdown mb-4">
                <select
                  value={selectedFilter}
                  onChange={handleFilterChange}
                  className="form-select"
                >
                  <option value="All">All</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
                <select
                  value={selectedTitleFilter}
                  onChange={handleTitleFilterChange}
                  className="form-select mt-2"
                >
                  <option value="All">All Titles</option>
                  <option value="Lorem Ipsum">Lorem Ipsum</option>
                  <option value="Lorem Ipsum & Lorem Ipsum">Lorem Ipsum & Lorem Ipsum</option>
                </select>
              </div>

              {/* Tabs */}
              <ul
                className="schedule-tabs nav nav-pills mb-10 mb-lg-10 d-flex justify-content-between justify-content-lg-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="schedule-button active"
                    id="day-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#day-1"
                    type="button"
                    role="tab"
                    aria-controls="day-1"
                    aria-selected="true"
                    style={{ fontSize: "16px", padding: " 18px 36px  " }}
                  >
                    <span className="fw-bold mb-0">Day 1</span>
                    <span className="d-none d-lg-block" style={{ fontSize: "12px" }}>
                      August 25, 2023
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="schedule-button"
                    id="day-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#day-2"
                    type="button"
                    role="tab"
                    aria-controls="day-2"
                    aria-selected="false"
                    style={{ fontSize: "16px", padding: " 18px 36px  " }}
                  >
                    <span className="fw-bold mb-0">Day 2</span>
                    <span className="d-none d-lg-block" style={{ fontSize: "12px" }}>
                      August 26, 2023
                    </span>
                  </button>
                </li>
                {/*  day 3*/}
                <li className="nav-item" role="presentation">
                  <button
                    className="schedule-button"
                    id="day-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#day-3"
                    type="button"
                    role="tab"
                    aria-controls="day-2"
                    aria-selected="false"
                    style={{ fontSize: "16px", padding: " 18px 36px  " }}
                  >
                    <span className="fw-bold mb-0">Day 3</span>
                    <span className="d-none d-lg-block" style={{ fontSize: "12px" }}>
                      August 26, 2023
                    </span>
                  </button>
                </li>
                {/* day 4 */}
                <li className="nav-item" role="presentation">
                  <button
                    className="schedule-button"
                    id="day-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#day-4"
                    type="button"
                    role="tab"
                    aria-controls="day-2"
                    aria-selected="false"
                    style={{ fontSize: "16px", padding: " 18px 36px  " }}
                  >
                    <span className="fw-bold mb-0">Day 4</span>
                    <span className="d-none d-lg-block" style={{ fontSize: "12px" }}>
                      August 26, 2023
                    </span>
                  </button>
                </li>
                {/* day 5   */}
                <li className="nav-item" role="presentation">
                  <button
                    className="schedule-button"
                    id="day-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#day-5"
                    type="button"
                    role="tab"
                    aria-controls="day-2"
                    aria-selected="false"
                    style={{ fontSize: "16px", padding: " 18px 36px  " }}
                  >
                    <span className="fw-bold mb-0">Day 5</span>
                    <span className="d-none d-lg-block" style={{ fontSize: "12px" }}>
                      August 26, 2023
                    </span>
                  </button>
                </li>
              </ul>
              {/* Tabs */}
              {/* Tabs-Contents */}
              <div className="tab-content" id="pills-tabContent">
                {/*day-1-tab  */}
                <div
                  className="tab-pane fade show active"
                  id="day-1"
                  role="tabpanel"
                  aria-labelledby="day-1-tab"
                  tabIndex={0}
                >
                  <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                    {filteredSchedule.map((item, index) => (
                      <li key={index} className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          {item.time}
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            {item.title}
                          </h2>
                          {item.description && (
                            <p className="custom-jakarta custom-font-style-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*day-1-tab  */}
                {/*day-2-tab  */}
                <div
                  className="tab-pane fade"
                  id="day-2"
                  role="tabpanel"
                  aria-labelledby="day-2-tab"
                  tabIndex={0}
                >
                   <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                    {filteredSchedule.map((item, index) => (
                      <li key={index} className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          {item.time}
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            {item.title}
                          </h2>
                          {item.description && (
                            <p className="custom-jakarta custom-font-style-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>


                {/*day-3-tab  */}
                <div
                  className="tab-pane fade"
                  id="day-3"
                  role="tabpanel"
                  aria-labelledby="day-2-tab"
                  tabIndex={0}
                >
                   <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                    {filteredSchedule.map((item, index) => (
                      <li key={index} className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          {item.time}
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            {item.title}
                          </h2>
                          {item.description && (
                            <p className="custom-jakarta custom-font-style-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* day 4 */}
                <div
                  className="tab-pane fade"
                  id="day-4"
                  role="tabpanel"
                  aria-labelledby="day-2-tab"
                  tabIndex={0}
                >
                   <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                    {filteredSchedule.map((item, index) => (
                      <li key={index} className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          {item.time}
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            {item.title}
                          </h2>
                          {item.description && (
                            <p className="custom-jakarta custom-font-style-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* day 5 */}
                <div
                  className="tab-pane fade"
                  id="day-5"
                  role="tabpanel"
                  aria-labelledby="day-2-tab"
                  tabIndex={0}
                >
                   <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                    {filteredSchedule.map((item, index) => (
                      <li key={index} className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                        <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta">
                          {item.time}
                        </h2>
                        <div>
                          <h2 className="fw-semibold text-opacity custom-jakarta">
                            {item.title}
                          </h2>
                          {item.description && (
                            <p className="custom-jakarta custom-font-style-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Tabs-Contents */}
            </div >
          </div>
          {/* col-8 */}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;