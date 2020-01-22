import React from 'react';

const Instructions = () => {
    return(
        <div>
            <ol style={{textAlign: 'left'}}>
          <li style={{textDecoration:"line-through"}}>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li style={{textDecoration:"line-through"}}>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li style={{textDecoration:"line-through"}}>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li style={{textDecoration:"line-through"}}>Pass the course ID to the "Course" page and output it there</li>
          <li style={{textDecoration:"line-through"}}>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li style={{textDecoration:"line-through"}}>Load the "Course" component as a nested component of "Courses"</li>
          <li style={{textDecoration:"line-through"}}>Add a 404 error page and render it for any unknown routes</li>
          <li style={{textDecoration:"line-through"}}>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
        <hr/>
        </div>
    );
};

export default Instructions;