import React, { useEffect } from "react";
import SubNav from "../../components/SubNav/SubNav";
import Cards from "../../components/Cards/Cards";

//Import Actions
import { getItems } from "../../../redux/actions/items";
import { getItemsBySearch } from "../../../redux/actions/items";

//Import Redux
import { useSelector, useDispatch } from "react-redux";

//Import Location
import { useLocation } from "react-router";

const Home = () => {
  //Dispatch
  const dispatch = useDispatch();
  //Location
  const location = useLocation();

  //Get Search Text
  const { search } = location;
  const params = search.split("=");
  //console.log(params.length);
  const searchText = params[params.length - 1];
  //console.log(searchText);

  useEffect(() => {
    if (params.length <= 1) dispatch(getItems());
    else dispatch(getItemsBySearch({ searchText }));
  }, [dispatch, location, searchText, params]);

  const { items } = useSelector((state) => state.items);
  //console.log(items);
  return (
    <>
      <SubNav />
      <div className="container">
        <Cards items={items} />
      </div>
    </>
  );
};

export default Home;
