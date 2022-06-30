import React from 'react';
import { modifyItem } from '../../serverqueries';
import s from './Modal.module.css';

export function Modal({ modalState, modalStateHandler }) {
  if (modalState.showModal) {
    console.log(modalState);
    return (
      <div className={s.wrap}>
        <div className={s.modalBackground}>
          <div className={s.modalContainer}>
            <div className={s.titleCloseBtn}>
              <button
                onClick={() => {
                  modalStateHandler({
                    ...modalState,
                    showModal: !modalState.showModal,
                  });
                }}
              >
                X
              </button>
            </div>

            <div className={s.body}>
              <div>Product name</div>
              <input
                className={s.input}
                type="text"
                defaultValue={modalState.itemData.name}
                onChange={e =>
                  modalStateHandler({
                    ...modalState,
                    itemData: { ...modalState.itemData, name: e.target.value },
                  })
                }
              />
              <div>Product category id</div>
              <input
                className={s.input}
                type="text"
                defaultValue={modalState.itemData.category}
                onChange={e =>
                  modalStateHandler({
                    ...modalState,
                    itemData: {
                      ...modalState.itemData,
                      category: e.target.value,
                    },
                  })
                }
              />
              <div>Product cost</div>
              <input
                className={s.input}
                type="text"
                defaultValue={modalState.itemData.cost}
                onChange={e =>
                  modalStateHandler({
                    ...modalState,
                    itemData: { ...modalState.itemData, cost: e.target.value },
                  })
                }
              />
            </div>
            <div className={s.footer}>
              <button
                onClick={() => {
                  modalStateHandler({
                    ...modalState,
                    showModal: !modalState.showModal,
                  });
                }}
                id={s.cancelBtn}
              >
                Cancel
              </button>
              <button
                id={s.contBtn}
                onClick={() => {
                  modifyItem({
                    id: modalState.itemData.id,
                    name: modalState.itemData.name,
                    categoryId: Number(modalState.itemData.category),
                    cost: modalState.itemData.cost,
                  });
                  modalStateHandler({
                    ...modalState,
                    showModal: !modalState.showModal,
                  });
                  window.location.reload();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
