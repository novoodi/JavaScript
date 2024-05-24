async function getUser() {	//	로딩	시	사용자	정보를	가져오는	함수
    try {
        // axios는 서버로부터 받은 JSON 응답을 자동으로 파싱하여 JavaScript 객체로 변환해줍니다.
        const res = await axios.get('/users');
        const users = res.data;
        const list = document.getElementById('list');
        list.innerHTML = '';
        //사용자마다 반복적으로	화면 표시	및	이벤트	연결
        Object.keys(users).map(function (key) {
            // 새로운 요소 div를 만들어서 저장
            // 변수 userDiv에 새로운 div를 만들어준다.
            const userDiv = document.createElement('div');
            // <span>요소를 만들어준다.
            const span = document.createElement('span');
            // <spam>요소에 users의 key값을 저장해 준다.
            // 예시 users 객체가 { name: 'Alice', age: 30 }일 때, key가 'name'이라면 users[key]는 'Alice'가 됩니다.
            span.textContent = users[key];
            // 새로운 요소인<button>을 만들어 준다. 
            const edit = document.createElement('button');
            // 이때 버튼 이름을 수정으로 만들어준다.
            edit.textContent = '수정';
            edit.addEventListener('click', async () => {	//	수정 버튼 클릭
                const name = prompt('바꿀 이름을 입력하세요');
                if (!name) {
                    return alert('이름을 반드시	입력하셔야	합니다');
                }
                try {
                    await axios.put('/user/' + key, { name });
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async () => {	//	삭제	버튼	클릭
                try {
                    await axios.delete('/user/' + key);
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });
            const report = document.createElement('button');
            report.textContent = ''
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
            console.log(res.data);
        });
    } catch (err) {
        console.error(err);
    }
}
window.onload = getUser;	//	화면	로딩	시	getUser	호출
//	폼	제출(submit)	시	실행
document.getElementById('form').addEventListener('submit', async (e) => {
    // 패이지가 새로고침 되는 것을 막는다.
    e.preventDefault();
    // 
    const name = e.target.username.value;
    if (!name) {
        return alert('이름을 입력하세요');
    }
    try {
        await axios.post('/user', { name });
        getUser();
    } catch (err) {
        console.error(err);
    }
    e.target.username.value = '';
});