function isPalindrome(value) {
    let str = value.toString();
    if (value instanceof Date) {
      str = value.toLocaleDateString('en-GB');
    }
    str = str.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9]+/g, "");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        } else {
            left++;
            right--;
        }
    }
    return true
}

const arr = [
    new Date(2022,1,22),
    'А Муза, ранясь шилом опыта, ты помолишься на разума',
    'Муза, ранясь шилом опыта, ты помолишься на разума',                
    'шалаш', 
    false,
    12342321,
    'потоп',
    8282882892, 
    [],
    [1, 2, 2, 2, 3],
    true,
    123433334321,
    'манекенам',
    'водоворот',
    'Он рёва наверно',
    ]

arr.forEach(value => {
    if (isPalindrome(value)) {
        console.log(value)
    }
})