import React from "react";
import { modifyItem } from "../../serverqueries";
import "./Modal.css";

export function Modal({ modalState, modalStateHandler }) {

    if (modalState.showModal) {

        console.log(modalState);
        return (
            <div className="wrap">
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">
                            <button onClick={() => {modalStateHandler({ ...modalState, showModal: !modalState.showModal })}}>
                                X
                            </button>
                        </div>

                        <div className="body">
                            <div>Product name</div>
                            <input className="input" type="text" defaultValue={modalState.itemData.name}
                                onChange={(e) => modalStateHandler({ ...modalState, itemData: { ...modalState.itemData, name: e.target.value } })}
                            />
                            <div>Product category id</div>
                            <input className="input" type="text" defaultValue={modalState.itemData.category}
                                onChange={(e) => modalStateHandler({ ...modalState, itemData: { ...modalState.itemData, category: e.target.value } })}
                            />
                            <div>Product cost</div>
                            <input className="input" type="text" defaultValue={modalState.itemData.cost}
                                onChange={(e) => modalStateHandler({ ...modalState, itemData: { ...modalState.itemData, cost: e.target.value } })}
                            />
                        </div>
                        <div className="footer">
                            <button
                                onClick={() => { modalStateHandler({ ...modalState, showModal: !modalState.showModal })}}
                                id="cancelBtn"
                            >
                                Cancel
                            </button>
                            <button id="contBtn"
                                 onClick={ () => {
                                    modifyItem({id: modalState.itemData.id, name: modalState.itemData.name, categoryId: Number(modalState.itemData.category), cost: modalState.itemData.cost});
                                    modalStateHandler({ ...modalState, showModal: !modalState.showModal });
                                    window.location.reload();;
                                }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}