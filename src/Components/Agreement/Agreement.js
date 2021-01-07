import React, { useState } from "react";
import Form from "./Components/Form";
import AgreementContent from "./Components/AgreementContent";

export default function Agreement() {
  const [checkedList, setCheckedList] = useState({
    tangWayPolicy: false,
    privacyPolicy: false,
    marketingPolicy: false,
  });

  const [allChecked, setAllChecked] = useState(false);

  const handleCheckedList = (e) => {
    const { name } = e.target;
    const setPolicyBoxes = {
      agreeAll: ["agreeAll", allChecked],
      tangWayPolicy: ["tangWayPolicy", checkedList.tangWayPolicy],
      privacyPolicy: ["privacyPolicy", checkedList.privacyPolicy],
      marketingPolicy: ["marketingPolicy", checkedList.marketingPolicy],
    };
    const [policyName, clicked] = setPolicyBoxes[name];

    if (name !== "agreeAll") {
      setCheckedList({
        ...checkedList,
        [policyName]: !clicked,
      });
      setAllChecked(false);
    } else {
      setAllChecked(!allChecked);
      handleAllChecked();
    }
  };

  const handleAllChecked = () => {
    allChecked
      ? setCheckedList({ tangWayPolicy: false, privacyPolicy: false, marketingPolicy: false })
      : setCheckedList({ tangWayPolicy: true, privacyPolicy: true, marketingPolicy: true });
  };

  return (
    <Form>
      <AgreementContent handleCheckedList={handleCheckedList} checkedList={checkedList} allChecked={allChecked} />
    </Form>
  );
}
