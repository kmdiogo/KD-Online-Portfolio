<template>
    <div class="text-page skills">
        <!-- TODO: Update background image with higher res photo -->
        <img class="media-bg about-me-bg" src="../assets/media/ExperienceBg.jpg" />
        <div class="h-super1" style="color: forestgreen">Work Experience</div>
        <hr style="width: 100%;" />


        <WorkItem year="2019" month="September" job-title="Research Assistant" company="Youngstown State University">
            <p>
                Collaborating with Electrical Engineering department to develop to an Android/IOS mobile application and web server
                to interface with a Bluetooth Low Energy device to collect pressure sensor readings.
            </p>
            <p>Technologies: Android, Django, Vue.js, Electron</p>
        </WorkItem>

        <hr style="width: 100%;" />

        <WorkItem year="2019" month="August" job-title="Software Engineer Intern" company="J.P. Morgan Chase & Co.">
            <p>Worked in an agile team with 3 other interns to create a web application to help Financial Controllers asses foreign exchange risk</p>
            <p>Implemented RESTful microservices using Spring Framework</p>
            <p>Collaborated with end-users to create an intuitive front-end experience using React.js</p>
            <p>Technologies: React, Bootstrap 4, Cloud Technologies, Java w/ Spring Framework</p>
        </WorkItem>

        <hr style="width: 100%;" />

        <WorkItem year="2018" month="February" job-title="Software Developer" company="Intellitech Corporation">
            <p>Developed Jail Management Systems and Public Safety Software for a variety of counties across the U.S.</p>
            <p>Technologies: ASP.NET MVC, Vue.js, VBA, MicrosoftSQL, WPF</p>
        </WorkItem>

        <hr style="width: 100%;" />

        <WorkItem year="2016" month="January" job-title="Computer Science Tutor" company="YSU Center for Student Progress">
            <p>
                Teach core programming concepts in C++, Java, and Python.
                Topics include Problem Solving, Data Structures and Algorithms, Artificial Intelligence, and Object-Oriented Programming
            </p>
        </WorkItem>

        <hr style="width: 100%;" />

        <WorkItem year="2016" month="January" job-title="Teacher" company="Oak Hill Collaborative">
            <p>
                Use Raspberry Pis and Python programming with Minecraft to teach 4th - 6th grade
                children the basics of computer hardware, software, and programming.
            </p>
        </WorkItem>



    </div>
</template>

<script>
    import WorkItem from "../components/Experience/WorkItem";

    export default {
        name: "Experience",
        components: {WorkItem,}
    }
</script>

<style scoped>
    .skills {
        display: flex;
        flex-direction: column;
    }

    .work-list {
        display: flex;
        flex-direction: column;
    }
</style>
