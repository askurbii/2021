let subcriptionFreePlan = document.querySelector('.plan-free');
let subscriptionStandardPlan = document.querySelector('.plan-standard');
let subscriptionPremiumPlan = document.querySelector('.plan-premium');

let subscriptionSelectButton = document.querySelector('.subscription-select');
let subscriptionStandardButton = document.querySelector('.plan-standard-button');
let subscriptionPremiumButton = document.querySelector('.plan-premium-button');


subcriptionFreePlan.addEventListener('mouseenter', function(){
    subscriptionSelectButton.classList.add('subscription-button-active')
});

subcriptionFreePlan.addEventListener('mouseleave', function(){
    subscriptionSelectButton.classList.remove('subscription-button-active')
});

// 1block end
subscriptionStandardPlan.addEventListener('mouseenter', function(){
    subscriptionStandardButton.classList.add('subscription-button-active')
});

subscriptionStandardPlan.addEventListener('mouseleave', function(){
    subscriptionStandardButton.classList.remove('subscription-button-active')
});

// 2nd block end
subscriptionPremiumPlan.addEventListener('mouseenter', function(){
    subscriptionPremiumButton.classList.add('subscription-button-active')
});

subscriptionPremiumPlan.addEventListener('mouseleave', function(){
    subscriptionPremiumButton.classList.remove('subscription-button-active')
});
// 3rd block end

AOS.init();


