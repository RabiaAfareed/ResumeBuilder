//-------------- contact section ---------------------
var contact = document.getElementById('contact');
var contact_btn = document.getElementById('contact_btn');
contact_btn === null || contact_btn === void 0 ? void 0 : contact_btn.addEventListener('click', function () {
    contact.classList.toggle('hide');
});
//-------------- education section ---------------------
var education = document.getElementById('education');
var edu_btn = document.getElementById('edu_btn');
edu_btn === null || edu_btn === void 0 ? void 0 : edu_btn.addEventListener('click', function () {
    education.classList.toggle('hide');
});
//-------------- language section ---------------------
var language = document.getElementById('language');
var lang_btn = document.getElementById('lang_btn');
lang_btn === null || lang_btn === void 0 ? void 0 : lang_btn.addEventListener('click', function () {
    language.classList.toggle('hide');
});
//-------------- language section ---------------------
var skill = document.getElementById('skill');
var skill_btn = document.getElementById('skill_btn');
skill_btn === null || skill_btn === void 0 ? void 0 : skill_btn.addEventListener('click', function () {
    skill.classList.toggle('hide');
});
//-------------- ref section ---------------------
var ref_section = document.getElementById('ref');
var ref_btn = document.getElementById('ref_btn');
ref_btn === null || ref_btn === void 0 ? void 0 : ref_btn.addEventListener('click', function () {
    ref_section.classList.toggle('hide');
});
//-------------- exp section ---------------------
var exp_section = document.getElementById('experience');
var exp_btn = document.getElementById('exp_btn');
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener('click', function () {
    exp_section.classList.toggle('hide');
});
//-------------- print section ---------------------
var print_btn = document.getElementById('print_btn');
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener('click', function () {
    window.print();
});
