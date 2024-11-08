import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../providers/CustomThemeProvider";

const CardForm = ({
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
  title,
}) => {
  const { isDark } = useTheme();
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      validateForm={validateForm}
      styles={{ maxWidth: "800px", color: isDark? '#ffffff' : '#121212'  }}
      title={title}
      to={ROUTES.ROOT}
    >
      <Input
        name="title"
        label="title"
        error={errors.title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="description"
        label="description"
        error={errors.description}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="webUrl"
        label="web"
        error={errors.webUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="country"
        label="country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="city"
        label="city"
        error={errors.city}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="street"
        label="street"
        error={errors.street}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="houseNumber"
        label="houseNumber"
        type="number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
    </Form>
  );
};

export default React.memo(CardForm);
