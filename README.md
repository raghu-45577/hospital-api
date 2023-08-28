## Hospital - API

- This Application is used in covid times to generate and track the status reports of the patients.
- NodeJs, expressJs and mongoDB technologies are used in creation of this application.

### Usage:

- This Application has 6 endpoints.
- /doctors/register : used to register the doctors in the application.
- /doctors/login : for doctors to login and get the jwt token.
- /patients/register : for registering the patients.
- /patients/:id/create_report : for creating the reports for patient of given id.
- /patients/:id/all_reports : list all the reports of the patients of given id.
- /reports/:status : gives all the reports with given status.

### Folder Structure

```

Hospital-API
    |
    |
    |
    |--->config---->|--->mongoose.js
    |
    |
    |                  |-->doctor_controller.js
    |--->controllers-->|-->patient_controller.js
    |                  |-->report_controller.js
    |
    |
    |               |-->doctor.js
    |--->models---->|-->patient.js
    |               |-->report.js
    |
    |
    |               |-->doctors.js
    |--->routes---->|-->index.js
    |               |-->patients.js
    |               |-->reports.js
    |
    |
    |
    |-->.env
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json

```

### How to setup the project on local system

- Clone this project into the system.
- Run the command **npm i** or **npm install** for installing all the required dependencies.
- Install the mongodb in the system if not already available.
- Now Run the command **npm start**.
- Open the browser and navigate to **http://localhost:8000/** to start the application.
