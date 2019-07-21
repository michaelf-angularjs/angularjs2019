function c(msg)
{
  console.log(msg)
}

function printObject(obj)
{
	for (let n in obj)
    {
      console.log(`${n} : ${obj[n]}`)
    }
}

const mySelf = new Object()
const mySelf1 = { name :  'Michael',
                 getName() {return this.name},
                 printName() {c(this.name)},
                 setName(name) {return this.name = name},
                 age : '27', address : { city : 'Holon', country : 'Israel'},
                getAddress() { return this.address },
                printAddress() { c(this.address) },
               	family: [{name : 'Nelli', age : '57'}],
                getNumRelatives() {return this.family.length},
                printNumRelatives() { c(this.getNumRelatives()) },
                addFamilyRelative() { return this.family.push({})}};

printObject(mySelf1)

//get address
mySelf1.getAddress()
mySelf1.printAddress()
////how many realtives
mySelf1.getNumRelatives()
mySelf1.printNumRelatives()
//print my name
mySelf1.getName()
mySelf1.printName()
//add family relative
mySelf1.addFamilyRelative(['vova','30'])
c(mySelf1.family)
//set name
mySelf1.setName('George')
mySelf1.printName()

function CreateMobilePhone(model,size,price,number)
{
  var result = {}
  result.model = model
  result.size = size
  result.price = price
  result.getNumber = function () {
     return result.number
  }
	return result
}

function mobilePhone(model,size,price,number)
{
  this.model = model
  this.size = size
  this.price = price
  this.getNumber = function () {
    return this.number
  }
  let _price = price
  this.getPrice = () => { return _price }
  this.setPrice = (newPrice) => { if (newPrice >= 0 && newPrice > _price) 
  				{
                                    _price = newPrice
 				 }}
  let _model = model
  this.getModel = () => { return _model }
  this.setModel = (newModel) => { if (newModel.length >= 4)
                                    {
					_model = newModel
                                    }
                                }
  
}

