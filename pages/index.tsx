import { usernameSelector, userState } from 'atoms/user';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

export default function Home() {
    const [user, setUser] = useRecoilState(userState);
    const reset = useResetRecoilState(userState);
    const usename = useRecoilValue(usernameSelector);
    const setUsename = useSetRecoilState(usernameSelector);

    return <div onClick={() => setUsename('시작하세요.')}>프로젝트 {usename}</div>;
}
