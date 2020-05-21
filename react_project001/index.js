exports.getName = function (param={}) {

    let{lastNameList=[],middleNameList=[],firstNameList=[]}= param;
    
    if(lastNameList.length === 0){
        lastNameList = ["张", "李", '孙', "王"];
    }
    if(middleNameList.length === 0){
        middleNameList = ["兰", "宇", '浩', "雨"];
    }
    if(firstNameList.length === 0){
        firstNameList = ["佳", "轩", '婷', "钧"];
    }
    
    const lastNameLength = lastNameList.length;
    const middleNameLength = middleNameList.length;
    const firstNameLength = firstNameList.length;

    let lastName = lastNameList[(Math.floor(Math.random() * lastNameLength))];
    let middleName = middleNameList[(Math.floor(Math.random() * middleNameLength))];
    let firstName = firstNameList[(Math.floor(Math.random() * firstNameLength))];

    return ([lastName, middleName, firstName].join(""));

}
