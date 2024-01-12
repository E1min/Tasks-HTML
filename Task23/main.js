//!Task-01
//*Konsola mesaj verin: «My name is Elmin».

//console.log("My name is Elmin");

//!Task-02
//*Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
//*Bu dəyişənin dəyərini konsolda göstərin

//let firstName="Elmin";
//console.log(firstName);

//!Task-03
//*Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
//*Birdən çox variant seçin.

//person
//$add

//!Task-04
//*Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
//*Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
//*və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
//*Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.

// let bookPrice = 750;
// let bookAmount = 14;
// let totalPrice = bookPrice*bookAmount;
// console.log(totalPrice);

//!Task-05
//*Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
//*kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
//*dəyərini saxlayır.msSpeed ​​dəyişəni təyin edin və
//*ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
//*msSpeed dəyişəninin dəyərini konsola çıxarın.

// let kmhSpeed = 75;
// let msSpeed = kmhSpeed*10/36;
// console.log(msSpeed)


//!Task-06
//*İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
//*günlərin sayını göstərən proqram yazın.

//let date=prompt("Dogum ilinizi yazin:");
// let now=2024;
// let day=(now-date)*365;
// console.log(`Sizin yasadiginiz gun sayi: ${day} `);

//!Task-07
//*Ədədlər üzərində əməliyyatları yerinə yetirin.
//*num dəyişənində iki rəqəmli ədəd saxlanılır.
//*Konsola çıxaran belə proqram yazın:
//*- Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
//*- 3 - ə bölünmədən qalan bu ədədin qalığını.

//let num=22;
// let numm=num**5;
// let nummm=num%3;

//!Task-08
//*Konsola bu növ mesaj çıxarın “Sizin adınız[firstName][lastName].
// *Tanışlığımıza çox şadam!”
//* firstName dəyişənində istifadəçinin adı,
//* lastName — dəyişənində isə soyadı saxlanır.
//*Konsola bu növ mesaj çıxarın “Sizin adınız[firstName][lastName].Tanışlığımıza çox şadam!”

//let firstName = 'Alan';
// let lastName = 'Turing';
// console.log(`Sizin adiniz ${firstName}  ${lastName} .Tanışlığımıza çox şadam!`)

//!Task-09
//*Şablon mətnlərdən istifadə edərək,
//*konsola “Sizi bir daha görməyimizə şadıq, [firstName][lastName]”.
//*firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

//let firstName="Mery";
// let lastName="Raisy";
// console.log(`Sizi bir daha görməyimizə şadıq ${firstName} ${lastName} .`)

//!Task - 10
//*Addaki hərflərin sayını konsola çıxarın.
//*fullName dəyişənində istifadəçinin tam adı saxlanılır.Addaki hərflərin sayını konsola çıxarın.
//*Probel hərf olaraq sayılmır.

// let fullName = "Elmin Qasimov"
// console.log(fullName.length);

//!Task - 11
//*İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
//*İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
//*fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
//*konsola çıxaran proqram yazın.

// let fullName="Elmin Qasimov"
// console.log(`${fullName.charAt(0)} ${fullName.charAt(6)}`);

//!Task - 12
//*İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
//*İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
//*Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let firstName=prompt("AD yazın:");
// let lastName=prompt("SOYAD yazın:");
// console.log(`${lastName} ${firstName}`);

//!Task - 13
//*Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
//* İstifadəçidən adını daxil etməsini istəyin.
//* Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let firstName=prompt("Adinizi yazin");
// console.log(`Salam, ${firstName}`);

//!Task - 14
//* İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt - alta 4 sətir olaraq çıxarın.
//* İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
//* Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
//* alt - alta 4 sətir olaraq çıxarın.

// let num1=prompt("Birinci ededi daxil et:");
// let num2=prompt("Ikinci ededi daxil et:");

// console.log( Number(num1)+Number(num2));
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);

//!Task - 15
//* 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6 - cı rəqəmini tapan proqram yazın

// let num1="12345";
// let num2="98765";
// let idk=String(num1 * num2);
// console.log(`12345 * 98765  = ${idk}`);
// console.log(`Hasilin 6-ci reqemi ise ${idk.charAt(5)}dir`);

//!Task - 16
//*Əməliyyatların nəticəsini müəyyənləşdirin.

/* "" + 1 + 0 =

"" - 1 + 0 =

"true" - false =

6 / "3" =

4 + 5 + "px" =

"$" + 4 + 5 =

"4" - 2 =

"4px" - 2 + "px" =

7 / 0 =

"-9" + 5 =

"-9" - 5 =

null + 1 =

undefined + 1 =*/

//!Task - 17
//*Rəqəmlərin cəmini göstərən proqram yazın.
//*İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
//*sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let num=prompt(`4 reqemli eded yazin:`);
// let total=Number(num.charAt(0)) + Number(num.charAt(1)) + Number(num.charAt(2)) + Number(num.charAt(3));
// console.log(total);

//!Task - 18
//*İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
//*Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
//*konsola «Salam,'ad'!» mesajını çıxarır.

// let Name=prompt("Soyad ve Adinizi yazin:");
// let words=String(Name.split(" "));
// console.log(`Salam, ${words[2]}!`);

