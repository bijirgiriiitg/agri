import HeaderPRD3 from "../../components/HeaderPRD3/HeaderPRD3";
import TabsPRD3 from "../../components/TabsPRD3/TabsPRD3";
import FreeAndMegaTestSeries from "../../components/FreeAndMegaTestSeries/FreeAndMegaTestSeries";
import { useState, useEffect } from "react";
function Prd3() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setActiveTab(value);
    console.log(value);
  };
  const [repo, setRepo] = useState([]);
  const getRepo = async () => {
    const res = await fetch(
      "https://agri-api-test.herokuapp.com/v1/testseries?page=0"
    );
    const response = await res.json();
    const myrepo = response.data;
    console.log(myrepo.freeTestSeries);
    if (res.status === 200) {
      setRepo(myrepo);
    }
  };

  useEffect(() => {
    getRepo();
  }, [activeTab]);
  return (
    <>
      <TabsPRD3 activeTab={activeTab} handleChange={handleChange}></TabsPRD3>
      <HeaderPRD3></HeaderPRD3>
      <FreeAndMegaTestSeries repo={repo}></FreeAndMegaTestSeries>
    </>
  );
}

export default Prd3;
