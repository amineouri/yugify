function calculateBMI() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var resultDiv = document.getElementById('resultbmi');

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; 

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
      return;
    }

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); 

    var category;
    if (bmi < 18.5) {
      category = 'Insuffisance pondérale';
    } else if (bmi < 25) {
      category = 'Poids normal';
    } else if (bmi < 30) {
      category = 'surpoids';
    } else {
      category = 'obésité';
    }

    resultDiv.textContent = 'Votre Indice de Masse Corporelle est: ' + bmi + '. Catégorie: ' + category;
  };

  function calculateCalories() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var ageInput = document.getElementById('age');
    var genderSelect = document.getElementById('gender');
    var activityLevelSelect = document.getElementById('activity-level');
    var resultDiv = document.getElementById('resultcal');

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var age = parseInt(ageInput.value);
    var gender = genderSelect.value;
    var activityLevel = parseFloat(activityLevelSelect.value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
      resultDiv.textContent = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
      return;
    }

    var calories;
    if (gender === 'male') {
      calories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    calories *= activityLevel;

    resultDiv.textContent = 'Votre besoin calorique journalier est de ' + calories.toFixed(2) + ' calories.';
  };



  function calculateIMG() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var genderSelect = document.getElementById('gender');
    var resultDiv = document.getElementById('resultbmg');

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; 
    var gender = genderSelect.value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
      return;
    }

    var bmi = weight / (height * height);
    var img;

    if (gender === 'male') {
      img = (1.2 * bmi) + (0.23 * 30) - 16.2;
    } else {
      img = (1.2 * bmi) + (0.23 * 30) - 5.4;
    }

    img = img.toFixed(2); 

    resultDiv.textContent = 'Votre Indice de Masse Grasse (IMG) est de ' + img + '%.';
  }; 
  function calculateIMG() {
      var weightInput = document.getElementById('weight');
      var heightInput = document.getElementById('height');
      var genderSelect = document.getElementById('gender');
      var resultDiv = document.getElementById('resultbmg');

      var weight = parseFloat(weightInput.value);
      var height = parseFloat(heightInput.value) / 100; 
      var gender = genderSelect.value;

      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
        return;
      }

      var bmi = weight / (height * height);
      var img;

      if (gender === 'male') {
        img = (1.2 * bmi) + (0.23 * 30) - (10.8 * 1) - 5.4;
      } else {
        img = (1.2 * bmi) + (0.23 * 30) - (10.8 * 0) - 5.4;
      }

      img = img.toFixed(2); 

      resultDiv.textContent = 'Votre Indice de Masse Grasse (IMG) est de ' + img + '%.';
    }


    setTimeout(function() {
      const button = document.getElementById('signup-button');
      button.classList.add('fade-in');
  }, 500);


  $(document).ready(function() {
    $('.sign-up-form').on('submit', submit);
    $('.reset-button').on('click', reset);
  });
  
  function submit(e) {
    $('.sign-up-container').addClass('submitted');
    e.preventDefault();
  }
  
  function reset() {
    $('.sign-up-container').removeClass('submitted');
    $('.sign-up-form')[0].reset();
  }

  let menuIcon = document.querySelector('#hamburger');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');}

