export default class User {
    constructor(firstName, lastName, birthday, gender, weight=null, height=null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
    }
}