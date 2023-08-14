-- 코드를 입력하세요
select MEMBER_NAME,REVIEW_TEXT,DATE_FORMAT(REVIEW_DATE, "%Y-%m-%d") as REVIEW_DATE from 
REST_REVIEW r 
inner join MEMBER_PROFILE mp 
on r.member_id = mp.member_id
where r.member_id =
(
    select member_id from REST_REVIEW
    group by member_id
    order by count(*) desc limit 1
)
order by r.REVIEW_DATE , r.REVIEW_TEXT