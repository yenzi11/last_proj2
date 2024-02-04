export default class Project {
  id = "";
  strCategory = "";
  strCategoryThumb = "";
  strCategoryDescription = "";
  

  constructor(initilizer) {
    this.id = initilizer.id;
    this.strCategory = initilizer.strCategory;
    this.strCategoryThumb = initilizer.strCategoryThumb;
    this.strCategoryDescription = initilizer.strCategoryDescription;
  }
}
