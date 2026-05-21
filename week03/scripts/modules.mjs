import { byuiCourse } from "./course.mjs";
import { setSectionSelection, getSelectedSection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = getSelectedSection();

    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = getSelectedSection();

    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});
