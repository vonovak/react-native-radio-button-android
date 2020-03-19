package io.sichacvah.react.radio_button;


import android.content.Context;

import androidx.appcompat.widget.AppCompatRadioButton;

public class RadioButtonView extends AppCompatRadioButton {
  private boolean mAllowChange;

  public RadioButtonView(Context context) {
    super(context);
    mAllowChange = true;
  }

  @Override
  public void setChecked(boolean checked) {
    if (mAllowChange) {
      mAllowChange = false;
      super.setChecked(checked);
    }
  }


  void setOn(boolean on) {
    if (isChecked() != on) {
      super.setChecked(on);
    }
    mAllowChange = true;
  }
}
