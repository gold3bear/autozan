var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();



driver.get('https://intools.cn/')
.then(_=>driver.sleep(10000))
.then(_=>driver.get('https://intools.cn/community/index'))
.then(_=>driver.wait(until.elementLocated(By.css('.list')), 5000))
// .then(_=>console.log(By.css('.list')));
 .then(_=>driver.findElement(By.xpath('//div[@list_c77fa923b4b24ab3acdf3288436e52d7]')).click());
