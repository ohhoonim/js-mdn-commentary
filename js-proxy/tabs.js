const selectedTab = new Proxy({
    selected: null,
},
    {
        set(obj, prop, newval) {
            const oldval = obj[prop];
            if (prop === 'selected') {
                if (oldval) {
                    let item = document.getElementById(oldval);
                    item.classList.remove('selected');
                }
                if (newval) {
                    let item = document.getElementById(newval);
                    item.classList.add('selected');
                }
            }
            // 값을 저장하는기본 동작
            obj[prop] = newval;
            // 성공 표시
            return true;
        }
    })

export { selectedTab }