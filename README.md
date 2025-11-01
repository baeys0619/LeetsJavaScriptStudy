# LeetsJavaScriptStudy

강의 '한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지'를 수강한 후 공부한 내용을 주차별로 각자 .md파일로 정리해서 올려주시면 됩니다!
<br>
아래 커밋푸시하는 방법 작성해놓았으니 참고해주시면 됩니다!

## 1. 레포 가져오기

```bash
git clone  https://github.com/baeys0619/LeetsJavaScriptStudy.git
```

---

## 2. 내 이름 브랜치 만들기 (최초 1회만)

```bash
git checkout -b {yourname}
```

---

## 3. 내 브랜치로 이동하기

```bash
git checkout {yourname}
```

---

## 4. 파일 수정 후 커밋 & 푸시

```bash
# 변경 사항 확인
git status

git add .

# 커밋 (형식: [MM/DD] 학습 범위/내용)
git commit -m "[11/06] 섹션2/JS기본까지 학습 완료"

---
# 내 브랜치 푸시
git push origin 작업한브랜치이름
```

---

## 5. Pull Request(PR) 올리기

- GitHub 웹사이트에서 `Compare & pull request` 버튼 클릭
- 제목 예시: `[1주차] 배윤선 학습 정리`
- 본문에 학습범위,궁금했던 부분 간단히 작성 후 PR 생성

---

## 6. 최신 코드 동기화 (주차별로 스터디 시작 전 필수!)

```bash
# main 브랜치로 이동
git checkout main

# 최신 코드 가져오기
git pull origin main

# 내 브랜치로 이동
git checkout yourname

# main 내용을 내 브랜치에 반영
git merge main
```