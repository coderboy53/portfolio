let skills = ["./images/c-program.svg","./images/cpp.svg","./images/html.svg","./images/css.svg","./images/java-icon.svg","./images/javascript-js-seeklogo.com.svg","./images/mysql-logo-svgrepo-com.svg","./images/svgviewer-output.svg"];
let titles = ["C", "C++", "HTML", "CSS", "Java", "JavaScript", "MySQL","MongoDB"];
let i = 0;
function prev()
{
    if(i==0)
        i=7;
    else
        i--;
    document.getElementById("skillimg").src = skills[i];
    document.getElementById("skillimg").title = titles[i];

}
function next()
{
    if(i==7)
        i=0;
    else
        i++;
    document.getElementById("skillimg").src = skills[i];
    document.getElementById("skillimg").title = titles[i];
}