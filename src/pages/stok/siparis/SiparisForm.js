import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import RoundIcon from "../../../components/RoundIcon";
import { CakeIcon, EditIcon, XIcon } from "../../../icons";
import PageTitle from "../../../components/Typography/PageTitle";
import { Input, Label, Button } from "@windmill/react-ui";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function SiparisForm({ formDefaultValues, onSubmit }) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: formDefaultValues
  });

  // Toast Notification
  const toastOptions = {
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true
  };

  let toastId = React.useRef(null);

  const updateSuccess = () => {
    toast.dismiss(toastId);

    toastId.current = toast("Kaydedildi!", {
      ...toastOptions,
      type: toast.TYPE.SUCCESS
    });
  };

  const updateFailure = () => {
    toast.dismiss(toastId);

    toastId = toast("Hata!!!", {
      ...toastOptions,
      type: toast.TYPE.ERROR
    });
  };

  useEffect(() => {
    if (formState.isSubmitted && !toast.isActive(toastId.current)) {
      if (formState.isSubmitSuccessful) {
        updateSuccess();
      } else {
        updateFailure();
      }
    }
  }, [formState]);

  return (
    <>
      <ToastContainer />
      <PageTitle>
        Sipariş {">"} {formDefaultValues.id ? "Düzenle" : "Ekle"}
      </PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col flex-wrap md:flex-row md:items-center md:justify-between">
            <div className="flex-1 inline-flex min-w-0">
              <RoundIcon
                icon={CakeIcon}
                iconColorClass="text-orange-500"
                bgColorClass="bg-orange-100"
              />
              <Input
                name="date"
                className="my-auto ml-3 text-xl font-medium text-gray-700"
                placeholder="Sipariş Tarihi"
                ref={register}
                defaultValue={formDefaultValues.date}
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <Button
                block
                layout="outline"
                className="ml-0 md:ml-4 mt-4 md:mt-0"
                iconLeft={XIcon}
                tag={Link}
                to={
                  formDefaultValues.id
                    ? "/app/siparis/" + formDefaultValues.id + "/detay"
                    : "/app/siparis"
                }
              >
                Vazgeç
              </Button>
              <Button
                disabled={!formState.isDirty}
                onClick={handleSubmit(onSubmit)}
                block
                className="ml-0 md:ml-4 mt-4 md:mt-0"
                iconLeft={EditIcon}
              >
                Kaydet
              </Button>
            </div>
          </div>
          <hr className="my-3" />
          <div className="my-1 flex flex-col">
            <Label>
              <span>Not</span>
              <Input
                name="note"
                className="mt-1"
                ref={register}
                defaultValue={formDefaultValues.note}
              />
            </Label>
          </div>
        </form>
      </div>
    </>
  );
}
