import React, { useState } from "react";
import map from "../../assets/contact/map.svg";
import call from "../../assets/contact/call.svg";
import { motion, useAnimation } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <div
      id="contact"
      ref={ref}
      className="mt-20 text-center w-full px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8 lg:px-10 xl:px-[10rem] py-[1rem]"
    >
      <motion.p
        className="text-[#2B7C85] text-sm md:text-[20px] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.p>
      <motion.p
        className="text-[#175873] text-xl md:text-[1.8rem] xl:text-3xl 2xl:text-3xl font-semibold xl:mt-14 md:mt-4 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        We would like to hear from you
      </motion.p>

      <div className="w-full grid md:grid-cols-2 mt-8 md:mt-8 gap-x-6">
        <div className="flex flex-col">
          <div className="font-medium mt-5 text-left">
            <p className="text-xs">
              Our friendly 24/7 support team is here to help you
            </p>
            <p className="flex text-xs text-[#009186] mt-5 items-center">
              <HiOutlineMail className="text-sm mr-2" />
              <span>Email: support@gigamoni.com</span>
            </p>
            <p className="flex text-xs text-[#009186] mt-5 items-center">
              <HiOutlinePhone className="text-sm mr-2" />
              <span>Phone: +2347040940000</span>
            </p>
          </div>
          <div className="relative mt-5 w-full">
            <img src={map} className="object-contain" alt="map" />
            <img
              src={call}
              className="object-contain w-[5rem] md:w-[7rem] absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2"
              alt="call"
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="mt-5 text-left">
            <p className="text-[#2B7C85] text-[17px] mt-5 md:text-0 md:text-[24px] font-semibold">
              Tell us how we can serve you better
            </p>
            <p className="text-[#262626] text-xs mt-3 mb-3">
              Let’s make your payments easier, together.
            </p>
          </div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              message: Yup.string().required("Message is required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // Simulate form submission
              setTimeout(() => {
                setShowSuccessMessage(true);
                resetForm();
                setSubmitting(false);
                setTimeout(() => {
                  setShowSuccessMessage(false);
                }, 3000); // Hide success message after 3 seconds
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-5">
                <Field
                  name="name"
                  placeholder="Name"
                  className="border border-solid border-[#87ACA3] mt-3 p-2 rounded-lg w-full focus:outline-[#D1D1D1] placeholder:text-xs placeholder:text-[#707070]"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />

                <Field
                  name="email"
                  placeholder="Email Address"
                  className="border border-solid border-[#87ACA3] mt-3 p-2 rounded-lg w-full focus:outline-[#D1D1D1] placeholder:text-xs placeholder:text-[#707070]"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />

                <Field
                  name="message"
                  as="textarea"
                  placeholder="Drop a message for us"
                  className="border border-solid h-[10rem] md:h-[14rem] border-[#87ACA3] mt-3 p-2 rounded-lg w-full focus:outline-[#D1D1D1] placeholder:text-xs placeholder:text-[#707070]"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />

                <motion.button
                  className="px-14 py-3 mt-5 text-xs font-semibold rounded-[8px] text-[#F8F8FF] bg-[#009186] float-right"
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
              </Form>
            )}
          </Formik>
          {showSuccessMessage && (
            <motion.p
              className="text-green-500 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Form submitted successfully!
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
