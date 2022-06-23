import React, { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Items } from './Items/Items';
import { getItems, getCategories } from '../../serverqueries';
import "./ListPage.css";

function initFilterState(categories) {
    const obj = {};
    for (let i = 0; i < categories.length; i++) {
        var tmp = categories[i].name;
        obj[tmp] = false;
    }
    console.log("INITIAL PRODUCT STATE", obj);
    return obj
}

const ListPage = (props) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filterState, setFilterState] = useState({});

    useEffect(() => {
        getItems().then(res => {
            setProducts(res);
        })
        getCategories().then(res => {
            setCategories(res);
            return res
        })
            .then((res) => { setFilterState(initFilterState(res)) });
    }, []);

    const stateLiftHandler = (newState) => {
        setProducts(newState);
    }

    const handleFilters = (filterType, filterState) => {

        let tv1 = { ...filterState, [filterType]: !filterState[filterType] };
        console.log("FILTER STATE:", tv1);

        /// ????? как связать асинхронный setState с синхронным, который зависит от изменного этим setState'ом стейта?
        setFilterState({ ...tv1 });
        /// ?????
        
        if (tv1[filterType] == true) {
            console.log("IF (TRUE)");
            let arr = [];
            let newState = [];
            for (let key in tv1) {
                if (tv1[key] === true) {
                    for (let i = 0; i < categories.length; i++) {
                        if (categories[i].name == key) {
                            arr.push(categories[i].id);
                        }
                    }
                }
            }
            console.log("ARRAY FOR NEW STATE: ", arr);


            /// ???????? как фильтровать по нескольким логическим условиям, если неизвестно кол-во этих условий?
            newState = products.filter((obj) => { return (obj.categoryId == arr[0]) || (obj.categoryId == arr[1]) || (obj.categoryId == arr[2]) });
            console.log("NEWSTATE:", newState);
            /// ????????

            setProducts(newState);
            // setProducts([
            //     {name: "TRUE",
            //     categoryId: 1,
            //     cost: "9999"},
            //     {name: "TRUE1",
            //     categoryId: 2,
            //     cost: "1111"},
            //     {name: "TRUE2",
            //     categoryId: 3,
            //     cost: "4444"}
            // ]);
            // regexpStr = regexpStr.slice(0, -1);
            // let actualRegexp = new RegExp(`${regexpStr}`, 'i');
            // console.log(actualRegexp, regexpStr);




            // const res = () => {
            //     const category = categories.find(obj => obj.name === filterType);
            //     return category.id
            // };
            // const categoryId = res();

            // let newState = productStateHolder.filter((obj) => { return obj.categoryId === categoryId });
            // setProducts(newState);
        } else {
            console.log("ELSE (FALSE)");

            setProducts([
                {
                    name: "FALSE",
                    categoryId: 1,
                    cost: "9999"
                },
                {
                    name: "FALSE1",
                    categoryId: 2,
                    cost: "1111"
                },
                {
                    name: "FALSE2",
                    categoryId: 3,
                    cost: "4444"
                }
            ]);
        }
    }

    return (
        <div className='list-page-main-container'>
            <Filter filters={categories} filtersHandler={handleFilters} filterState={filterState} />
            <Items products={products} categories={categories} parentStateHandler={stateLiftHandler} />
        </div>
    )
};

export default ListPage;