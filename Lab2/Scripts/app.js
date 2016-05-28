/*Custom scripts go here*/
/*By Mudrak Patel_300878960_comp125_2016*/

//Array declaration
var ParagraphArray = [0, 1, 2];
//HomeParagraph declaration
ParagraphArray[0]=document.getElementById("HomeParagraph");
//AboutParagraph declaration
ParagraphArray[1]=document.getElementById("AboutParagraph");
//ProjectsParagraph declaration
ParagraphArray[2]=document.getElementById("ProjectsParagraph");
//Declaring ParagraphContentArray
var ParagraphContentArray=[];
ParagraphContentArray[0]="Hi there, this is my homeparagraph and it's inside my homepage!";
ParagraphContentArray[1]="Hi there, this is my Aboutparagraph and it's inside my aboutpage!";
ParagraphContentArray[2]="Hi there, this is my projectsparagraph and it's inside my projectspage!";
//Checking for existance of our paragraphs on respective pages
for (var index = 0; index < ParagraphArray.length; index++) {
        if(ParagraphArray[index]) {
         ParagraphArray[index].textContent = ParagraphContentArray[index];
        }
}
//Injecting text into footer
var FooterSection=document.getElementById("FooterSection");
FooterSection.innerHTML="Copyright by Mudrak Patel_300878960_comp125_2016";